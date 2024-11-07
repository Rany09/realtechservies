package in.rentify.service;

import in.rentify.model.Contact;
import in.rentify.dao.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> getQueriesByOwnerId(Long ownerId) {
        return contactRepository.findByOwnerId(ownerId);
    }

    public List<Contact> getQueriesByPropertyId(Long propertyId) {
        return contactRepository.findByPropertyId(propertyId);
    }

    public Contact getQueryDetails(Long id) {
        return contactRepository.findById(id).orElse(null);
    }
}
