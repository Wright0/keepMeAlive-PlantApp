package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Game;
import com.codeclan.example.server.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
