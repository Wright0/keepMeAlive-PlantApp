package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Game;
import com.codeclan.example.server.projections.EmbedPlayerAndPlant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPlayerAndPlant.class)
public interface GameRepository extends JpaRepository<Game, Long> {
}
