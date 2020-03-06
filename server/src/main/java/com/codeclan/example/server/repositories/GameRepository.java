package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Game;
import com.codeclan.example.server.projections.EmbedGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedGame.class)
public interface GameRepository extends JpaRepository<Game, Long> {
}
