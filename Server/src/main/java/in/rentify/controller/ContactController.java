package in.rentify.controller;

import in.rentify.model.Contact;
import in.rentify.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    // Endpoint to create a new contact request
    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
    	Contact savedContact = contactService.createContact(contact);
        return ResponseEntity.ok(savedContact);
    }

    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<List<Contact>> getContactsByOwnerId(@PathVariable Long ownerId) {
        List<Contact> contacts = contactService.getQueriesByOwnerId(ownerId);
        if (contacts.isEmpty()) {
            return ResponseEntity.noContent().build();  // No contacts found for this ownerId
        }
        return ResponseEntity.ok(contacts);  // Return the list of contacts
    }

    // Endpoint to get details of a specific contact request by ID
    @GetMapping("/{contactId}")
    public ResponseEntity<Contact> getContactDetails(@PathVariable Long contactId) {
        Contact contact = contactService.getContactDetails(contactId);
        return ResponseEntity.ok(contact);
    }

    // Endpoint to get all contact requests with optional pagination and filtering
    @GetMapping
    public ResponseEntity<?> getAllContacts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String sort) {

        try {
            Page<Contact> contacts = contactService.getAllContacts(page, size, search, sort);
            return ResponseEntity.ok(contacts);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("An error occurred while fetching contacts");
        }
    }

    // Endpoint to delete a contact request by ID
    @DeleteMapping("/{contactId}")
    public ResponseEntity<String> deleteContact(@PathVariable Long contactId) {
        contactService.deleteContact(contactId);
        return ResponseEntity.ok("Contact request deleted successfully");
    }

    // Endpoint to update a contact request
    @PutMapping
    public ResponseEntity<Contact> updateContact(@RequestBody Contact contact) {
        Contact updatedContact = contactService.updateContact(contact);
        return ResponseEntity.ok(updatedContact);
    }
}
