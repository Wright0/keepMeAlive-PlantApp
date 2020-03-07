package com.codeclan.example.server.projections;

import com.codeclan.example.server.models.Game;
import com.codeclan.example.server.models.Plant;
import com.codeclan.example.server.models.Player;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedPlayerAndPlant", types = Game.class)
public interface EmbedPlayerAndPlant {
    Long getId();
    String getScore();
    Player getPlayer();
    Plant getPlant();
}
