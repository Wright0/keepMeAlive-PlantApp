package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Plant;
import com.codeclan.example.server.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository  extends JpaRepository<Player, Long> {
}
