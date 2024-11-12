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
        $projects = Projects::paginate(10);

        return inertia("Projects/Index", [
            "projects" => ProjectResource::collection(Projects::all()),
            "pagination" => [
                "current_page" => $projects->currentPage(),
                "page_urls" => $projects->getUrlRange(1, $projects->lastPage()),
                "last_page" => $projects->lastPage(),
                "per_page" => 10,
                "total_items" => $projects->total(),
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
        return inertia("Projects/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectsRequest $request)
    {
        $data = $request->validated();
        dd($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Projects $project)
    {
        return inertia("Projects/Show", [
            'project' => new ProjectResource($project)
        ]);
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
