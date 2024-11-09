<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use App\Http\Requests\StoreTasksRequest;
use App\Http\Requests\UpdateTasksRequest;
use App\Http\Resources\TaskResource;
use Illuminate\Support\Facades\Cache;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Tasks::paginate(10);

        return inertia("Tasks/Index", [
            'tasks' => TaskResource::collection($tasks->items()),
            "pagination" => [
                "current_page" => $tasks->currentPage(),
                "page_urls" => $tasks->getUrlRange(1, $tasks->lastPage()),
                "last_page" => $tasks->lastPage(),
                "per_page" => 10,
                "total_items" => $tasks->total(),
                "next_page_url" => $tasks->nextPageUrl(),
                "prev_page_url" => $tasks->previousPageUrl(),
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTasksRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tasks $tasks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tasks $tasks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTasksRequest $request, Tasks $tasks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tasks $tasks)
    {
        //
    }
}
