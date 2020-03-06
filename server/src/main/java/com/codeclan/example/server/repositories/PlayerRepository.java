package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Player;
import com.codeclan.example.server.projections.EmbedGame;
import com.codeclan.example.server.projections.EmbedPlayer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPlayer.class)
public interface PlayerRepository  extends JpaRepository<Player, Long> {
}
