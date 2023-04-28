package com.machine.learning.dashboard.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tensorflow.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
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

    @GetMapping("/callPy")
    public Map<String, Object> getPyInfo() {
        Map<String, Object> map = new HashMap<>();
        map.put("name", "call py");

        String pyPath = "/Users/c5312072/Desktop/test.py";
        // 传入python的参数
        String[] args = new String[] {"python3", pyPath, "111"};
        try {
            // 执行python文件，并传入参数
            Process process = Runtime.getRuntime().exec(args);
            // 获取python输出字符串作为输入流被java读取
            BufferedReader in  = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String actionString = in.readLine();
            if (actionString != null) {
                map.put("actionString", actionString);
            }
            in.close();
            process.waitFor();

        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        return map;
    }

}
