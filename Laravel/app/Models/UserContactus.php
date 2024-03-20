<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserContactus extends Model
{
    use HasFactory;

    protected $table = 'user_contactus';

    protected $guarded = [
        'contactus_id',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function contactus()
    {
        return $this->belongsTo(Contactus::class);
    }
}
