package tw.doublec.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import tw.doublec.model.ERole;
import tw.doublec.model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}