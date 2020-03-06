package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "score")
    private int score;

    @JsonIgnoreProperties("games")
    @ManyToOne
    @JoinColumn(name = "plant_id", nullable = false)
    private Plant plant;

    @JsonIgnoreProperties("games")
    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;

    public Game(int score, Plant plant, Player player) {
        this.score = score;
        this.plant = plant;
        this.player = player;
    }

    public Game() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Plant getPlant() {
        return plant;
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
