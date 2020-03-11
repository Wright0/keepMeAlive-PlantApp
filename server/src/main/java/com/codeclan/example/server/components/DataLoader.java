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

        Plant plant1 = new Plant("Swiss Cheese Plant", "Monstera Deliciosa", "Plant native to Southern Mexico, requires weekly watering and fertilisation every two weeks, needs indirect light and to be kept at a temperature around 28c - 34c, Fun Fact: They can grow up to 65 feet in height", 4, 2, "indirect", 28, 34, "https://i.ibb.co/Tb0QG9c/monstera.png");
        Plant plant2 = new Plant("Snake Plant", "Dracaena Trifasciata", "Plant native to West Africa, requires watering twice a month and fertilisation once a month, needs direct light and to be kept at a around temperature 15c - 26c, Fun Fact: Snake plants purify the air around your home, which can improve your sleep!", 2, 1, "direct", 15, 26, "https://i.ibb.co/rdG5Z0r/snakeplant.png");
        Plant plant3 = new Plant("Rubber Fig", "Ficus Elastica", "Plant native to Southeast Asia, requires watering twice a month and fertilisation once a month, needs indirect light and to be kept a temperature at around 18c to 27c, Fun Fact: Their sap is poisonous and should be out of reach to children and pets", 2, 1, "indirect", 18, 27, "https://i.ibb.co/VT45hKC/rubberfig.png");
        plantRepository.save(plant1);
        plantRepository.save(plant2);
        plantRepository.save(plant3);
        Player player1 = new Player("Matteo");
        playerRepository.save(player1);
        Game game1 = new Game(5, plant1, player1);
        gameRepository.save(game1);


    }
}
