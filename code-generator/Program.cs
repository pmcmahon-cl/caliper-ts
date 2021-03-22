﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CodeGenerator.Types;
using ImsGlobal.Caliper;
using ImsGlobal.Caliper.Entities;
using ImsGlobal.Caliper.Events;

namespace CodeGenerator
{
    class Program
    {
        static readonly string GENERATED_FILE_HEADER = @"/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */";

        static void Main(string[] args)
        {
            Caliper.ApplicationURI = new Uri("https://typescript.gen");

            if(args.Length < 1)
                throw new ArgumentException("arg[0] must be the destination path to write the code files");

            var destination = args[0].Replace('\\', '/');
            Console.WriteLine("Generating code files at: " + destination);

            var userTypes = GetTypescriptClasses();
            WriteTypescriptClasses(userTypes, destination);
            WriteTypescriptIndex(userTypes, destination);
        }

        static TypescriptClassCollection GetTypescriptClasses()
        {        
            var eventType = typeof(Event);
            var entityType = typeof(Entity);
            var assembly = eventType.Assembly;

            var types = new List<Type>();
            types.AddRange(assembly.GetTypes().Where(_ => eventType.IsAssignableFrom(_)));
            types.AddRange(assembly.GetTypes().Where(_ => entityType.IsAssignableFrom(_)));

            var userTypes = new TypescriptClassCollection();
            foreach (var type in types)
            {
                if (type.IsAbstract || userTypes.ContainsKey(type.Name))
                    continue;

                var @class = TypescriptClass.FromType(type, userTypes);
                @class.Build();
            }
            return userTypes;
        }

        static void WriteTypescriptClasses(TypescriptClassCollection userTypes, string destination)
        {
            var omissions = new[] { "ImsGlobal", "Caliper" };
            foreach (var item in userTypes)
            {
                var declaration = item.Value;
                var names = declaration.Type.Namespace.Split('.').Where(name => !omissions.Contains(name));
                var directory = $"{destination}/{string.Join("/", names)}";
                if (!Directory.Exists(directory))
                    Directory.CreateDirectory(directory);

                using (var writer = new StreamWriter($"{directory}/{declaration.Type.Name}.ts"))
                {
                    writer.Write($"{GENERATED_FILE_HEADER}\n\n{declaration.ClassDeclaration}");
                }
            }
        }

        static void WriteTypescriptIndex(TypescriptClassCollection userTypes, string destination)
        {
            var schemaImports = new List<string>{ GENERATED_FILE_HEADER, "" };
            var schemaExports = new List<string>();        
            var indexExports = new List<string>();

            foreach (var item in userTypes)
            {
                var relativePath = $"{typeof(Caliper).GetRelativeDirectory(item.Value.Type)}{item.Value.Type.Name}";
                indexExports.Add($"export * from '{relativePath}';");
                
                var eventDeclaration = item.Value as EventTypescriptClass;
                if(eventDeclaration?.SchemaExport != null){
                    schemaImports.Add($"import {{ {eventDeclaration.SchemaExport} }} from '{relativePath}';" );
                    schemaExports.Add(eventDeclaration.SchemaExport);
                }
            }

            schemaImports.Add($@"
export const schemas = {{
    {string.Join(",\n\t", schemaExports.Select(export => $"[{export}.context]: {export}.schema"))}
}};
            ");
            using (var writer = new StreamWriter($"{destination}/schemas.ts"))
            {
                writer.Write(string.Join("\n", schemaImports));
            }

            indexExports.Sort();
            indexExports.InsertRange(0, new[]
            {
                GENERATED_FILE_HEADER,
                "",
                "export * from './schemas';",
            });
            using (var writer = new StreamWriter($"{destination}/index.ts"))
            {
                writer.Write(string.Join("\n", indexExports));
            }
        }
    }
}
