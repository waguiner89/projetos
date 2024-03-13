package duke.choice;

public class Main {
    public static void main(String[] args) {
        System.out.println("Bem-vindo ao Duke Choice Shop!\n");
        double tax, total;
        tax = 0.2;

        Customer c1 = new Customer();

        c1.name = "Verônica";
        c1.size = "S";

        Clothing item1 = new Clothing();
        Clothing item2 = new Clothing();

        Clothing [] items = {item1, item2};

        item1.description = "Blue Jacket";
        item1.price = 20.9;

        item2.description = "Orange T-Shirt";
        item2.price = 10.5;
        item2.size = "S";

        total = (item1.price + (item2.price*2))*(1+tax);

        System.out.println("Cliente " + c1.name + " comprou 03 itens, 01 Jacket e 02 T-Shirts:");
        System.out.printf("Descrição do item 1:%s Size:%s Price: $%.2f \n", item1.description, item1.size, item1.price);
        System.out.printf("Descrição do item 2:%s Size:%s Price: $%.2f \n", item2.description, item2.size, item2.price);
        System.out.printf("Total a pagar: $%.2f \n", total);

        int measurement = 9;

        switch (measurement){
            case 1, 2, 3:
                c1.size = "S";
                break;
            case 4, 5, 6:
                c1.size = "M";
                break;
            case 7, 8, 9:
                c1.size = "L";
                break;
            default:
                c1.size = "X";
        }

        System.out.println("Customer's Size: "+ c1.size);
    }
}