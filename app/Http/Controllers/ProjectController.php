<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use App\Http\Requests\StoreProjectsRequest;
use App\Http\Requests\UpdateProjectsRequest;
use App\Http\Resources\ProjectResource;
use Illuminate\Support\Facades\Cache;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Projects::query();
        $projects = Cache::remember('projects_page_' . request('page', 1), 60, function () {
            return Projects::paginate(10);
        });

        return inertia("Projects/Index", [
            "projects" => ProjectResource::collection($projects->items()),
            "pagination" => [
                "current_page" => $projects->currentPage(),
                "last_page" => $projects->lastPage(),
                "per_page" => $projects->perPage(),
                "total" => $projects->total(),
                "next_page_url" => $projects->nextPageUrl(),
                "prev_page_url" => $projects->previousPageUrl(),
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
    public function store(StoreProjectsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Projects $projects)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Projects $projects)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectsRequest $request, Projects $projects)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projects $projects)
    {
        //
    }
}
