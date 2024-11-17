/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by laravel-typescriptable
declare namespace App.Models {
  export interface Projects {
    id: number
    name: string
    description?: string
    due_date?: string
    status: string
    image_path: string
    created_at?: string
    updated_at?: string
    tasks_count?: number
    tasks?: App.Models.Tasks[]
    created_by?: App.Models.User
    updated_by?: App.Models.User
  }
  export interface Tasks {
    id: number
    name: string
    description?: string
    image_path?: string
    status: string
    priority: string
    due_date?: string
    assigned_user_id: number
    created_by: number
    updated_by: number
    projects_id: number
    created_at?: string
    updated_at?: string
  }
  export interface User {
    id: number
    name: string
    email: string
    email_verified_at?: string
    password: string
    remember_token?: string
    created_at?: string
    updated_at?: string
    notifications_count?: number
    notifications?: any[]
  }
}

declare namespace App {
  export interface PaginateLink {
    url: string
    label: string
    active: boolean
  }
  export interface Paginate<T = any> {
    data: T[]
    current_page: number
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: App.PaginateLink[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string
    to: number
    total: number
  }
  export interface ApiPaginate<T = any> {
    data: T[]
    links: {
      first?: string
      last?: string
      prev?: string
      next?: string
    }
    meta: {
      current_page: number
      from: number
      last_page: number
      links: App.PaginateLink[]
      path: string
      per_page: number
      to: number
      total: number
    }
  }
}
