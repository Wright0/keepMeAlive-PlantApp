package com.codeclan.example.server.components;


import com.codeclan.example.server.models.Game;
import com.codeclan.example.server.models.Plant;
import com.codeclan.example.server.models.Player;
import com.codeclan.example.server.repositories.GameRepository;
import com.codeclan.example.server.repositories.PlantRepository;
import com.codeclan.example.server.repositories.PlayerRepository;
import org.hibernate.loader.plan.build.spi.LoadPlanTreePrinter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    GameRepository gameRepository;

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    PlantRepository plantRepository;

    public DataLoader() {
    }

    public void run (ApplicationArguments args) {

        Plant plant1 = new Plant("Monstera", "Monstera Deliciosa", "This is a plant, water it", 4, 2, "indirect", 28, 34, "wwww.aliveplant.com", "www.deadplant.com");
        Plant plant2 = new Plant("Snake Plant", "Dracaena Trifasciata", "This is a plant, water it", 2, 1, "direct", 15, 26, "wwww.aliveplant.com", "www.deadplant.com");
        Plant plant3 = new Plant("Rubber Fig", "Ficus Elastica", "This is a plant, water it", 2, 1, "indirect", 18, 27, "wwww.aliveplant.com", "www.deadplant.com");
        plantRepository.save(plant1);
        plantRepository.save(plant2);
        plantRepository.save(plant3);
        Player player1 = new Player("Matteo");
        playerRepository.save(player1);
        Game game1 = new Game(5, plant1, player1);
        gameRepository.save(game1);


    }
}
