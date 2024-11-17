export const STATUS_TEXT_MAP = {
    pending: "Pending",
    in_progress: "In Progress",
    completed: "Completed",
};

export const STATUS_COLOR_MAP = {
    pending: "text-orange-600 border-orange-600 rounded-full bg-transparent",
    in_progress: "text-blue-600 border-blue-600 rounded-full bg-transparent",
    completed: "text-green-600 border-green-600 rounded-full bg-transparent",
};

export const PROJECT_FIELD = ({
    project,
}: {
    project: App.Models.Projects;
}) => {
    return [
        {
            label: "Project ID",
            value: project.id,
        },
        {
            label: "Project Name",
            value: project.name,
        },
        {
            label: "Project Status",
            value: project.status,
        },
        {
            label: "Created By",
            value: project.created_by?.name,
        },
        {
            label: "Due Date",
            value: project.due_date,
        },
        {
            label: "Updated By",
            value: project.updated_by?.name,
        },
        {
            label: "Project Description",
            value: project.description,
        },
    ];
};

export const TASK_FIELD = ({ task }: { task: App.Models.Tasks }) => {
    return [
        {
            label: "Task ID",
            value: task.id,
        },
        {
            label: "Task Name",
            value: task.name,
        },
        {
            label: "Task Status",
            value: task.status,
        },
        {
            label: "Priority",
            value: task.priority,
        },
        {
            label: "Task Description",
            value: task.description,
        },
        {
            label: "Created By",
            value: task.created_by.name,
        },
        {
            label: "Updated By",
            value: task.updated_by?.name,
        },
        {
            label: "Due Date",
            value: task.due_date,
        },
        {
            label: "Assigned User",
            value: task.assigned_user_id?.name,
        },
    ];
};
