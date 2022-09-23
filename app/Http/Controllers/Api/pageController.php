<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\pageResource;
use App\Models\page;
use Illuminate\Http\Request;

class pageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\page  $page
     * @return \Illuminate\Http\Response
     */
    public function show(page $page)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\page  $page
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, page $page)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(page $page)
    {
        //
    }
    public function savePage(Request $req){
        $result=Page::where('id_project_in',$req->id_project_in)
                    ->where('name_page',$req->name_page)
                    ->count();
        if($result==0){
            $p=new page();
            $p->name_page=$req->name_page;
            $p->id_project_in=$req->id_project_in;
            $p->content=$req->content;
            $p->save();
            return "save";
        }
        else if($result==1){
            $p=Page::where('id_project_in',$req->id_project_in)
                    ->where('name_page',$req->name_page)
                    ->update(['content'=>$req->content]);
            //$p->content=$req->content;
            //$p->update($req->all);
            return "update";
        }
    }
    public function get_pages_of_project(Request $req){
        return pageResource::collection(Page::where('id_project_in',$req->id_project_in)->get());
    }
    public function delete_page(Request $req){
        Page::where('id_project_in',$req->id_project_in)
        ->where('name_page',$req->name_page)
        ->delete();
        return "delete";
    }

    public function get_id_page(Request $req){
        return pageResource::collection(Page::where('id_project_in',$req->id_project_in)
        ->where('name_page',$req->name_page)
        ->get());
        
    }
}
