package com.machine.learning.dashboard.Controller;

import com.machine.learning.dashboard.Model.TestModel;
import com.machine.learning.dashboard.Service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    @Autowired
    private TestService testService;


    @GetMapping("/test")
    public List<TestModel> Index() {

        return testService.findAll();

    }

}
