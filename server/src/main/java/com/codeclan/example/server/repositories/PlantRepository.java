package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {
}
