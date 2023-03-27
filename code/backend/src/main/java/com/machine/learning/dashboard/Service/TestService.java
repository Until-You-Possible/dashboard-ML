package com.machine.learning.dashboard.Service;


import com.machine.learning.dashboard.Model.TestModel;
import com.machine.learning.dashboard.Repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    public List<TestModel> findAll() {
        return testRepository.findAll();
    }

}
