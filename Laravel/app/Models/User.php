<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'gender',
        'date_of_birth',
        'phone',
        'about',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function favourites()
    {
        return $this->belongsToMany(Product::class, 'favourite_products', 'user_id', 'product_id')->withTimestamps();
    }

    /*  public function favouriteProducts()
    {
        return $this->hasManyThrough(Product::class, Favourite::class, 'user_id', 'id', 'id', 'product_id')
                ->with('images');
    } */

    public function favouriteProducts()
    {
        return $this->belongsToMany(Product::class, 'favourite_products', 'user_id', 'product_id')->withTimestamps();
    }

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function shipping()
    {
        return $this->hasOne(Shipping::class);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
