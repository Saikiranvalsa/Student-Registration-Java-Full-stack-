package com.example.Backend.Controller;

import com.example.Backend.Exception.UserNotFoundException;
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
    @GetMapping("/users")
    public List<User> fetchData(){
        return repo.findAll();
    }
    @GetMapping("/user/{id}")
    public User fetchById(@PathVariable("id") Long id){
        return repo.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/user/{id}")
    public String Delete(@PathVariable("id") Long id){
        if(!repo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        repo.deleteById(id);
        return "User with id "+id+" has been deleted successfully";

    }
    @PutMapping("/user/{id}")
    public User UpdateById(@PathVariable("id") long id,@RequestBody User newUser){
        return repo.findById(id).map(user->{
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return repo.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
}
