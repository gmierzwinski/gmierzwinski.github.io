
class Warehouse {

}

class WarehouseCloneable implements Cloneable {
    public Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }
}

class Shop implements Cloneable {
    private Warehouse warehouse;
    private WarehouseCloneable warehouseCloneable;

    public Shop() {
        warehouse = new Warehouse();
        warehouseCloneable = new WarehouseCloneable();
    }

    public String toString() {
        return "Shop, Warehouse: " + warehouse.toString() +
                " WarehouseCloneable: " + warehouseCloneable.toString();
    }

    public Object clone() {
        try {
            Shop t = (Shop) super.clone();
            t.warehouseCloneable = (WarehouseCloneable) warehouseCloneable.clone();
            return t;
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }
}

public class CloningExample {
    public static void main(String[] args) {
        Shop s = new Shop();
        Shop t = (Shop) s.clone();

        System.out.println(s);
        System.out.println(t);
    }
}