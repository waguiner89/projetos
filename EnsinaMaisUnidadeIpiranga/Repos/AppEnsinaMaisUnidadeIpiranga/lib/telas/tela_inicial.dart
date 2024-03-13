import 'package:flutter/material.dart';

class TelaInicial extends StatelessWidget {
  const TelaInicial({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 255, 153, 0),
        title: const Text(
          "Ensina Mais - Turma da Mônica",
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        bottom: const PreferredSize(
          preferredSize: Size.fromHeight(24.0),
          child: Column(
            children: [
              Text(
                "Unidade Ipiranga",
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.white),
              )
            ],
          ),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const SizedBox(height: 8),
          Image.asset(
            'assets/img/logoensinamais.png',
            height: 80,
            fit: BoxFit.contain,
            alignment: Alignment.center,
          ),
          const SizedBox(height: 8),
          Wrap(
            alignment: WrapAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsets.all(30),
                child: Container(
                  decoration: BoxDecoration(
                    color: const Color.fromARGB(31, 46, 46, 46),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  padding: const EdgeInsets.all(8.0),
                  child: const Text(
                    "CONSULTE SEUS PONTOS",
                    style: TextStyle(
                        color: Color.fromARGB(255, 0, 0, 0),
                        fontFamily: 'DigitalNumbers400',
                        fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
