package com.codeclan.example.server.projections;

import com.codeclan.example.server.models.Game;
import com.codeclan.example.server.models.Player;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedGame", types = Game.class)
public interface EmbedGame {
    String getId();
}