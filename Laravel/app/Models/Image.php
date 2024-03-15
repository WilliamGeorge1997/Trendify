<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = 'product_images';
    protected $fillable = [
        'image_path',
        'product_id',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
