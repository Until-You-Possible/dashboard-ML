package com.machine.learning.dashboard.Repository;

import com.machine.learning.dashboard.Model.IrisModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IrisDataRepository extends JpaRepository<IrisModel, Long> {

}
