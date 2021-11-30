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
                    <i class="fas fa-home nav-icon"></i>
                    <span class="caption">Home</span>
                </div>
            </Link>

            <Link to="/projects">
                <div class="box2">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-tasks nav-icon"></i>
                    <span class="caption">Projects</span>
                </div>
            </Link>

            <Link to="/blogs">
                <div class="box3">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-feather nav-icon"></i>
                    <span class="caption">Blogs</span>
                </div>
            </Link>

            <Link to="/contact">
                <div class="box4">
                    <div>
                        <button class="input"></button>
                    </div>
                    <i class="fas fa-envelope nav-icon"></i>
                    <span class="caption">Contact</span>
                </div>
            </Link>
        </nav>


    );
};

export default Navigation;