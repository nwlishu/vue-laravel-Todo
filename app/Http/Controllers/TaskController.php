<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'task' => 'required|string|max:255',
        ]);

        $task = Task::create([
            'task' => $request->task,
        ]);

        return response()->json($task);
    }

    public function index()
    {
        return response()->json(Task::all());
    }
}