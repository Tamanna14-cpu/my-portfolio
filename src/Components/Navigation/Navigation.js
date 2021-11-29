import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <Link to="/home">
                <div class="box">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-home"></i>
                    <span class="caption">Home</span>
                </div>
            </Link>

            <Link to="/about">
                <div class="box2">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-user"></i>
                    <span class="caption">About</span>
                </div>
            </Link>

            <Link to="/projects">
                <div class="box3">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-tasks"></i>
                    <span class="caption">Projects</span>
                </div>
            </Link>

            <Link to="/blogs">
                <div class="box4">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-feather"></i>
                    <span class="caption">Blogs</span>
                </div>
            </Link>

            <Link to="/contact">
                <div class="box5">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-envelope"></i>
                    <span class="caption">Contact</span>
                </div>
            </Link>
        </nav>


    );
};

export default Navigation;