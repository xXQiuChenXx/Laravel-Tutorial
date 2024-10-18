<?php

namespace Database\Seeders;

use App\Models\Projects;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('123.321A'),
            "email_verified_at" => time()
        ]);

        Projects::factory()->count(30)->hasTasks(30)->create();
    
        
    }
}
