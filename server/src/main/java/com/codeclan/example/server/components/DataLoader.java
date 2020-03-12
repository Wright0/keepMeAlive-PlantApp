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

        Plant plant1 = new Plant("Swiss Cheese Plant", "Monstera Deliciosa", "Plant native to Southern Mexico. Popular climbing plant that can grow up to 65 feet in height. In ideal conditions Monstera's will flower and will produce a fruit you can eat, but only ripe! If it isn't ripe it can be toxic to humans.", 4, 2, "indirect", 28, 34, "https://i.imgur.com/FBO07vu.png");
        Plant plant2 = new Plant("Snake Plant", "Dracaena Trifasciata", "Plant native to West Africa. This plant gets it's name from it's recognisable sharp pointing leaves. It can also absorb excessive amounts of carbon dioxide which can purify the air around your home!", 2, 1, "direct", 15, 26, "https://i.imgur.com/9L2Zsrv.png");
        Plant plant3 = new Plant("Rubber Fig", "Ficus Elastica", "Plant native to Southeast Asia, They have big round leaves that are said to represent abundance and wealth! They also have a milky sap that is notoriously poisonous and should be kept out of reach from children and pets", 2, 1, "indirect", 18, 27, "https://i.imgur.com/5BU9J6R.png");
        plantRepository.save(plant1);
        plantRepository.save(plant2);
        plantRepository.save(plant3);
        Player player1 = new Player("Matteo");
        playerRepository.save(player1);
        Game game1 = new Game(5, plant1, player1);
        gameRepository.save(game1);


    }
}
