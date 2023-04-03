package com.machine.learning.dashboard.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tensorflow.*;
import org.tensorflow.op.Ops;
import org.tensorflow.op.core.Add;
import org.tensorflow.op.core.Placeholder;
import org.tensorflow.types.TFloat32;
import org.tensorflow.types.TInt32;

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

    @GetMapping("/getDBL")
    public String getDBL() {

        try (Graph g = new Graph()) {
            // Define input tensor x with shape [2, 2] and values [[1, 2], [3, 4]]
            Tensor<Float> x = Tensor.create(new float[][] {{1.0f, 2.0f}, {3.0f, 4.0f}}, Float.class);

            // Define an Add operation to add x to itself
            Add<TFloat32> add = (Add<TFloat32>) Add.create(g);
            Operand<TFloat32> y = add.add(x, x);

            // Create a session to run the graph
            try (Session session = new Session(g)) {
                // Run the graph and get the output tensor
                Tensor<Float> result = session.runner().fetch(y).run().get(0).expect(Float.class);
                System.out.println(result.toString());
            }
        }

        return "";
    }

}
