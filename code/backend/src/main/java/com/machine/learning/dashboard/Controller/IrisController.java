package com.machine.learning.dashboard.Controller;


import com.machine.learning.dashboard.Model.IrisModel;
import com.machine.learning.dashboard.Service.IrisDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/iris")
public class IrisController {

    @Autowired
    private IrisDataService irisDataService;

    // insert the data of iris
    @GetMapping("/insert")
    public void insertIris() throws IOException {
        irisDataService.insertIris();
    }

    @GetMapping("/getIris")
    public List<IrisModel> getIris() {
        return irisDataService.findAll();
    }

}
