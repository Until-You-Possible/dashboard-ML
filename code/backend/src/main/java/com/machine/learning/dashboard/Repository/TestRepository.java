package com.machine.learning.dashboard.Repository;

import com.machine.learning.dashboard.Model.TestModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<TestModel, Long> {

}
