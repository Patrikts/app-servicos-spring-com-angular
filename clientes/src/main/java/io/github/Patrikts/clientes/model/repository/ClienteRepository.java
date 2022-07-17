package io.github.Patrikts.clientes.model.repository;

import io.github.Patrikts.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
