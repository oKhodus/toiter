from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Product(BaseModel):
    name: str
    price: str
    discount: str
    loyalty_card_required: bool

@app.get("/discounts", response_model=List[Product])
async def get_discounts():
    discounts = [
        Product(
            name = "Йогурт",
            price="1,50 Eur",
            discount="10%",
            loyalty_card_required=True
        ),
        Product(
            name = "Молоко",
            price="0,90 Eur",
            discount="-",
            loyalty_card_required=False
        )
    ]
    return discounts