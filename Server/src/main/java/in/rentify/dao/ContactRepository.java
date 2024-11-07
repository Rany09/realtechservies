package in.rentify.dao;

import in.rentify.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    List<Contact> findByOwnerId(Long ownerId);
    List<Contact> findByPropertyId(Long propertyId);
}
