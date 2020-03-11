package com.codeclan.example.server.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "plants")
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "common_name")
    private String commonName;

    @Column(name = "scientific_name")
    private String scientificName;

    @Column(name = "description")
    private String description;

    @Column(name = "watering_frequency")
    private int wateringFrequency;

    @Column(name = "fertilisation_frequency")
    private int fertilisationFrequency;

    @Column(name = "light_requirement")
    private String lightRequirement;

    @Column(name = "min_temperature")
    private int minTemperature;

    @Column(name = "max_temperature")
    private int maxTemperature;

    @Column(name = "plant_image_url")
    private String plantImageUrl;

    @OneToMany(mappedBy = "plant", fetch = FetchType.LAZY)
    private List<Game> games;

    public Plant(String commonName, String scientificName, String description, int wateringFrequency, int fertilisationFrequency, String lightRequirement, int minTemperature, int maxTemperature, String plantImageUrl) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.description = description;
        this.wateringFrequency = wateringFrequency;
        this.fertilisationFrequency = fertilisationFrequency;
        this.lightRequirement = lightRequirement;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
        this.plantImageUrl = plantImageUrl;
        this.games = new ArrayList<>();
    }

    public Plant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getScientificName() {
        return scientificName;
    }

    public void setScientificName(String scientificName) {
        this.scientificName = scientificName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getWateringFrequency() {
        return wateringFrequency;
    }

    public void setWateringFrequency(int wateringFrequency) {
        this.wateringFrequency = wateringFrequency;
    }

    public int getFertilisationFrequency() {
        return fertilisationFrequency;
    }

    public void setFertilisationFrequency(int fertilisationFrequency) {
        this.fertilisationFrequency = fertilisationFrequency;
    }

    public String getLightRequirement() {
        return lightRequirement;
    }

    public void setLightRequirement(String lightRequirement) {
        this.lightRequirement = lightRequirement;
    }

    public int getMinTemperature() {
        return minTemperature;
    }

    public void setMinTemperature(int minTemperature) {
        this.minTemperature = minTemperature;
    }

    public int getMaxTemperature() {
        return maxTemperature;
    }

    public void setMaxTemperature(int maxTemperature) {
        this.maxTemperature = maxTemperature;
    }

    public String getPlantImageUrl() {
        return plantImageUrl;
    }

    public void setPlantImageUrl(String aliveImageUrl) {
        this.plantImageUrl = aliveImageUrl;
    }

    public List<Game> getGames() {
        return games;
    }

    public void setGames(List<Game> games) {
        this.games = games;
    }
}
