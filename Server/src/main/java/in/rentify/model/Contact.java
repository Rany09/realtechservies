package in.rentify.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    
    @JsonProperty("ownerId")
    private Long ownerId;
    
    @JsonProperty("propertyId")
    private Long propertyId;

    @Column(nullable = false)
    @JsonProperty("message")
    private String message;

    private LocalDateTime createdAt = LocalDateTime.now();

    private String status = "Pending";

    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", userId=" + userId +
                ", ownerId=" + ownerId +
                ", propertyId=" + propertyId +
                ", message='" + message + '\'' +
                ", createdAt=" + createdAt +
                ", status='" + status + '\'' +
                '}';
    }
}
