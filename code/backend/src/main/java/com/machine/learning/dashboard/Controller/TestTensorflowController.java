package com.machine.learning.dashboard.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tensorflow.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/tf")
public class TestTensorflowController {

    @GetMapping("/version")
    public Map<String, Object> getVersion() throws Exception{
        Map<String, Object> map = new HashMap<>();
        map.put("framework", "tensorflow");
        map.put("version", TensorFlow.version());
        return map;
    }

}
