package io.github.Patrikts.clientes.model.repository;

import io.github.Patrikts.clientes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
