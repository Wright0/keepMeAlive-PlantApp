package com.codeclan.example.server.projections;

import com.codeclan.example.server.models.Game;
import com.codeclan.example.server.models.Player;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedPlayer", types = Player.class)
public interface EmbedPlayer {
    String getName();
}
