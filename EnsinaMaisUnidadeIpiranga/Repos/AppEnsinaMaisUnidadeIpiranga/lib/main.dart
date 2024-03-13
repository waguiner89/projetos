import 'package:flutter/material.dart';
import 'package:flutter_app_ensina_mais_ipiranga/telas/tela_inicial.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: TelaInicial(),
    );
  }
}
