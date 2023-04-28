package com.machine.learning.dashboard.Service;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.machine.learning.dashboard.Model.IrisModel;
import com.machine.learning.dashboard.Repository.IrisDataRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class IrisDataService {

    private final IrisDataRepository irisDataRepository;
    public IrisDataService (IrisDataRepository irisDataRepository) {
        this.irisDataRepository = irisDataRepository;
    }

    public List<IrisModel> findAll() {
       return  irisDataRepository.findAll();
    }

    public void insertIris() throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        List<IrisModel> irisModelList = objectMapper.readValue(new File("/Users/c5312072/Downloads/csvjson.json"), new TypeReference<List<IrisModel>>() {});
        try {
            irisDataRepository.saveAll(irisModelList);
        } catch (DataIntegrityViolationException e) {
            System.err.println("error saving " + e.getMessage());
        }
    }


}
