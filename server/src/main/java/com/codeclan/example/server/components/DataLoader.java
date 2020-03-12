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

        Plant plant1 = new Plant("Swiss Cheese Plant", "Monstera Deliciosa", "A plant native to Southern Mexico, Monstera Deliciosas earn their namesake. These monsters grow very quickly and can grow to be 65 feet in height in their natural habitat! In ideal growing conditions, a Monstera will flower and produce a fruit you can eat, but only when ripe! If eaten too soon, it can be toxic to humans. The holes in their leaves are called fenestrations and in addition to giving the plant an interesting look, serve a function. The fenestrations help protect the leaves during tropical storms. The strong wind goes through the holes and does not damage the leaves so easily. Monsteras are toxic to pets and therefore not the best companion for fido.", 4, 2, "indirect", 28, 34, "https://i.imgur.com/FBO07vu.png");
        Plant plant2 = new Plant("Snake Plant", "Dracaena Trifasciata", "A plant native to West Africa, the Snake Plant gets its name from its recognisable sharp pointed leaves. It can grow up to 12 feet tall in ideal green house conditions. It is a hardy plant that can handle some neglect, making it an excellent first plant. Snake Plants can also absorb high amounts of carbon dioxide, which can purify the air around your home! Snake plants come in a variety of colours and forms. The most popular form is arguably the variegated form which has bright green leaves with yellow edges.", 2, 1, "direct", 15, 26, "https://i.imgur.com/9L2Zsrv.png");
        Plant plant3 = new Plant("Rubber Fig Tree", "Ficus Elastica", "A plant native to Southeast Asia, Rubber Fig Trees have big round leaves that are said to represent abundance and wealth! They have a milky sap that is notoriously poisonous and should be kept out of reach of children and pets. Rubber plants can be found in a variety of variegated forms, one of the most popular being the camouflage style. Rubber Fig Trees are known for their strong roots and grow very quickly. In their natural habitat, they will grow up to 100 feet tall! Fear not, the maximum expected growth for indoor Rubber Figs is 10 feet.", 2, 1, "indirect", 18, 27, "https://i.imgur.com/5BU9J6R.png");
        plantRepository.save(plant1);
        plantRepository.save(plant2);
        plantRepository.save(plant3);
        Player player1 = new Player("Matteo");
        playerRepository.save(player1);
        Game game1 = new Game(5, plant1, player1);
        gameRepository.save(game1);


    }
}
