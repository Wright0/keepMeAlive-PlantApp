package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface PlayerRepository  extends JpaRepository<Player, Long> {
}
