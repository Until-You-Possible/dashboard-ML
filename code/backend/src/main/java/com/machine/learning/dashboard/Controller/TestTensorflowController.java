package com.machine.learning.dashboard.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tensorflow.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
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

        String pyPath = "/Users/wanggang/Desktop/github/dashboard/dashboard-ML/code/python/index.py";

        // Python解释器路径
        String pythonPath = "/usr/bin/python3";

        ProcessBuilder pb = new ProcessBuilder(pythonPath, pyPath);
        Map<String, String> env = pb.environment();
        env.put("PYTHONPATH", "/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/site-packages");

        try {
            Process process = pb.start();
            // 获取Python进程的标准输出和标准错误输出
            InputStream stdout = process.getInputStream();
            InputStream stderr = process.getErrorStream();
            // 将标准输出和标准错误输出分别读取并输出
            BufferedReader stdoutReader = new BufferedReader(new InputStreamReader(stdout));
            BufferedReader stderrReader = new BufferedReader(new InputStreamReader(stderr));
            String line;
            while ((line = stdoutReader.readLine()) != null) {
                System.out.println(line);
            }
            while ((line = stderrReader.readLine()) != null) {
                System.err.println(line);
            }
            // in.close();
            process.waitFor();

        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        return map;
    }

}
