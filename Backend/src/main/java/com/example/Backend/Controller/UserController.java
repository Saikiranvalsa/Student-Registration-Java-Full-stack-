package com.example.Backend.Controller;

import com.example.Backend.Model.User;
import com.example.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository repo;
    @PostMapping("/user")
    public User saveData(@RequestBody User user){
        return repo.save(user);
    }
    @GetMapping("/")
    public List<User> fetchData(){
        return repo.findAll();
    }
    @GetMapping("/{id}")
    public User fetchById(@PathVariable("id") Long id){
        return repo.findById(id).get();
    }
    @DeleteMapping("/user/{id}")
    public String Delete(@PathVariable("id") Long id){
        repo.deleteById(id);
        return "Successfully deletes";
    }
}
