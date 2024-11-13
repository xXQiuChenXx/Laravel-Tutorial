<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use App\Http\Requests\StoreProjectsRequest;
use App\Http\Requests\UpdateProjectsRequest;
use App\Http\Resources\ProjectResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Projects/Index", [
            "projects" => ProjectResource::collection(Projects::all()->sortBy('id')),
            "success" => session('success')
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
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $path = $request->file('image')->store('images', 'public');
        $data['image_path'] = Storage::url($path);
        unset($data["image"]);

        Projects::create($data);

        return to_route('projects.index')->with('success', 'Project created successfully');
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
    public function update(UpdateProjectsRequest $request, Projects $project)
    {

        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($data['image']) {
            if ($project->image_path) {
                Storage::disk('public')->delete($project->image_path);
            }
            $path = $request->file('image')->store('images', 'public');
            $data['image_path'] = Storage::url($path);
        }
        unset($data["image"]);
        $project->update($data);
        return to_route('projects.index')->with('success', "Project \"$project->name\" updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projects $project)
    {
        $project->delete();
        if ($project->image_path) {
            Storage::disk('public')->delete($project->image_path);
        }
        return to_route("projects.index")
            ->with('success', "Project \"$project->name\" was deleted");
    }
}
